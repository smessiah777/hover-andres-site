import $ from 'jquery';

class PrimaryMenu {
	constructor() {
		this.menuIcon = $(".site-header__menu-icon");
		this.closeIcon = $(".primary-menu__close-icon");
		this.menuContent = $(".primary-menu__content");
	  	this.menuOverlay = $(".primary-menu__overlay");
	  	this.menuLink = $("#hero-link, #music-link, #social-link");
	  	this.events()
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		this.closeIcon.click(this.toggleTheMenu.bind(this));
		this.menuLink.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass(".primary-menu__content--is-visible");
		this.menuOverlay.toggleClass(".primary-menu__overlay--is-visible");
	}



}



export default PrimaryMenu;