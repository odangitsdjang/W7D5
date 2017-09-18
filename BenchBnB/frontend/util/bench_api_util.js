export const fetchBenches = () => (
  $.ajax({
    url: '/api/benches/'
  })
);

export const createBench = (bench) => (
  $.ajax({
    url: '/api/benches/',
    method: "POST",
    data: { bench }
  })
);
