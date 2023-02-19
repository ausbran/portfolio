export default {
  provide() {
    return {
      projects: this.projects,
      blocks: this.blocks,
      name: this.name,
      type: this.type
    }
  }
};