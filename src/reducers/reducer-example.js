export default function(state = null, action) {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return action.payload;
    break;
  }
  return state;
}
