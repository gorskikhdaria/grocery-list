export const sortEntries = (entries) => {
  return entries.sort((a, b) => {
    if (a.priority === b.priority) {
      if (a.name === b.name) {
        return 0;
      }
      return a.name > b.name ? 1 : -1;
    }
    return a.priority - b.priority;
  });
};
