<template>
    <div>
        <project-details v-if="currentProject" :project="currentProject"/>
        <projectLink v-else 
                     v-for="project in projects"
                     v-bind="project"
                     v-bind:key="project.projectName"
        />
    </div>
</template>

<script>
    import projectLink from './projectLink';
    import projectDetails from './projectDetails';
    import json from '@/json/projectLink.json';

    export default {
        name: 'work',
        props: {
            name: String,
        },
        data() {
            return {
                projects: Object.values(json),
            };
        },
        computed: {
            currentProject() {
                if (this.name) {
                    return this.projects.find(
                        project => project.projectName === this.name,
                    );
                }
            },
        },
        components: {
            projectLink,
            projectDetails,
        },
    };
</script>