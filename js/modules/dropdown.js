const dropdownList = Array.from(document.querySelectorAll('[data-dropdown]'));

function _eventListeners() {
  document.addEventListener('click', (e) => {
    const openDropdown = dropdownList?.find((el) => el.open);
    const child = openDropdown?.contains(e.target) ?? false;

    if (openDropdown && !child) {
      openDropdown.open = false;
    }
  });
}

function init() {
  if (dropdownList.length === 0) return;

  _eventListeners();
}

export default init;
