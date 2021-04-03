import Details from '@vendor/details';

const detailsList = document.querySelectorAll('details');

function init() {
  if (detailsList.length === 0) return;

  detailsList.forEach((detail) => {
    new Details(detail);
  });
}

export default init;
