const { createApp, ref } = Vue;

createApp({
  setup() {
    const tasks = ref([]);
    const newTask = ref('');
    let nextId = 1;

    function addTask() {
      const name = newTask.value.trim();

      if (!name) return;

      tasks.value.push({
        id: nextId++,
        name,
        completed: false
      });
      newTask.value = '';
    }

    function toggleTask(id) {
      const task = tasks.value.find((item) => item.id === id);

      if (task) task.completed = !task.completed;
    }

    function deleteTask(id) {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    }

    return {
      tasks,
      newTask,
      addTask,
      toggleTask,
      deleteTask
    };
  }
}).mount('#app');
