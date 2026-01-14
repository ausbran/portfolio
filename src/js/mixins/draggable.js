const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default {
  mounted() {
    this.$nextTick(() => {
      const root = this.$el || document;
      const targets = root.querySelectorAll('.draggable');
      const state = new WeakMap();

      this._draggableCleanup = [];

      targets.forEach((target) => {
        target.style.touchAction = 'none';
        target.style.userSelect = 'none';

        const handlePointerDown = (event) => {
          if (event.button !== undefined && event.button !== 0) {
            return;
          }
          const parent = target.closest('.project-image');
          if (!parent) {
            return;
          }
          const parentHeight = parent.getBoundingClientRect().height;
          const targetHeight = target.getBoundingClientRect().height;
          const diff = targetHeight - parentHeight;

          if (diff <= 0) {
            return;
          }

          const startTranslate = Number(target.dataset.dragY || 0);
          state.set(target, {
            startY: event.clientY,
            startTranslate,
            diff
          });

          target.classList.add('is-dragging');
          if (target.setPointerCapture) {
            target.setPointerCapture(event.pointerId);
          }
        };

        const handlePointerMove = (event) => {
          const data = state.get(target);
          if (!data) {
            return;
          }
          const delta = event.clientY - data.startY;
          const next = clamp(data.startTranslate + delta, -data.diff, 0);
          target.style.transform = `translate3d(0, ${next}px, 0)`;
          target.dataset.dragY = String(next);
        };

        const handlePointerUp = () => {
          if (!state.has(target)) {
            return;
          }
          state.delete(target);
          target.classList.remove('is-dragging');
        };

        target.addEventListener('pointerdown', handlePointerDown);
        target.addEventListener('pointermove', handlePointerMove);
        target.addEventListener('pointerup', handlePointerUp);
        target.addEventListener('pointercancel', handlePointerUp);

        this._draggableCleanup.push(() => {
          target.removeEventListener('pointerdown', handlePointerDown);
          target.removeEventListener('pointermove', handlePointerMove);
          target.removeEventListener('pointerup', handlePointerUp);
          target.removeEventListener('pointercancel', handlePointerUp);
        });
      });
    });
  },
  beforeUnmount() {
    if (Array.isArray(this._draggableCleanup)) {
      this._draggableCleanup.forEach((cleanup) => cleanup());
      this._draggableCleanup = null;
    }
  }
};
