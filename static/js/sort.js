function getNoteGraphRadius(item) {
  const noteGraph = document.getElementById("note-graph");
  if (noteGraph == null || item.id === "") {
    return 0;
  }

  const graphLink = noteGraph.getElementById("circle_" + item.id);
  if (graphLink == null || graphLink.childNodes.length === 0) {
    return 0;
  }

  return graphLink.childNodes[0].r.baseVal.value;
}

function sortByRadius(a, b) {
  return getNoteGraphRadius(b) - getNoteGraphRadius(a);
}

function sortByName(a, b) {
  return (a.dataset.title || "").localeCompare(b.dataset.title || "");
}

function sortByDate(a, b) {
  return new Date(b.dataset.date || 0) - new Date(a.dataset.date || 0);
}

function sortListOfItems(type) {
  const noteList = document.getElementById("note_list");
  if (noteList == null) {
    return;
  }

  const items = Array.from(noteList.getElementsByTagName("li"));
  if (type === "top") {
    items.sort(sortByRadius);
  } else if (type === "name") {
    items.sort(sortByName);
  } else if (type === "latest") {
    items.sort(sortByName);
    items.sort(sortByDate);
  }

  noteList.replaceChildren(...items);
}

const sorter = document.getElementById("sort_type");

function sortItems() {
  if (sorter == null) {
    return;
  }

  sortListOfItems(sorter.selectedOptions[0].value);
}

window.sortItems = sortItems;

if (sorter != null) {
  const lastSelected = localStorage.getItem("select");

  if (lastSelected) {
    sorter.value = lastSelected;
  }

  sorter.onchange = function () {
    localStorage.setItem("select", sorter.options[sorter.selectedIndex].value);
    sortItems();
  };

  sortItems();
}
