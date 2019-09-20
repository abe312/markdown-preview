import { INPUT } from '../constants';

const updateInput = event => ({
  type: INPUT.UPDATE,
  payload: event.target.value,
});

export { updateInput };

// const loadImages = () => ({
//     type: IMAGES.LOAD,
// });

// const setImages = images => ({
//     type: IMAGES.LOAD_SUCCESS,
//     images,
// });

// const setError = error => ({
//     type: IMAGES.LOAD_FAIL,
//     error,
// });

// const loadImagesStats = id => ({
//     type: STATS.LOAD,
//     id,
// });

// const setImagesStats = (id, downloads) => ({
//     type: STATS.LOAD_SUCCESS,
//     id,
//     downloads,
// });

// const setStatsError = id => ({
//     type: STATS.LOAD_FAIL,
//     id,
// });
