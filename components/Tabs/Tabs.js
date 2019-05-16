class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.linkItemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    this.linkItem = new TabItem(this.linkItemElement);

    this.link.addEventListener('click', () => {
      this.select();
    });

  };

  select() {
    const links = document.querySelectorAll('.tabs-link');

    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    });

    this.link.classList.add('tabs-link-selected');
    this.linkItem.select();
  }
}

class TabItem {
  constructor(item) {
    this.item = item;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');

    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });
    
    this.item.classList.add('tabs-item-selected');
  }
}

class Tabs {
  constructor() {
    const linkElements = document.querySelectorAll(".tabs-link");

    this.links = linkElements.forEach(link => new TabLink(link));
    console.log(links[0])
    // this.currentTab = this.links[0];
  }

  deselect() {

  }
}

let links = document.querySelectorAll('.tabs-link');

links.forEach(link => new Tabs(link));