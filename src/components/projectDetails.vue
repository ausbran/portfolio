<template>
    <div>
        <div>
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'projectDetails',
        props: {
            project: Object,
        },
    };
</script>