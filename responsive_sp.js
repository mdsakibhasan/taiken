var DOMAIN_NAME					= 'http://localhost/taiken-bus-new/';

var SMARTPHONE_SCREEN 			= 768;

var REPLACE_IDS 				= [
	{
		replace_from 	: 'Wrapper',	/*Existing ID*/
		replace_with 	: 'DEMO_ID'	/*New ID*/
	}
];

var MOVE_IDS 					= [
	{
		move_from 		: 'DEMO',						/*Node ID, which one you want to move. (Ex: "hello_world")*/
		move_to 		: {
			container_id 	: 'DEMO_ID',				/*Container node ID, Where you want to place. (Ex: "container")*/
			current_index 	: current_index('DEMO'),	/*Getting the current index of moviable node. (Ex. current_index('hello_world'))*/
			insert_index 	: 'lastChild',				/*"firstChild","lastChild" or any Specific index*/
			is_moved 		: false
		}
	}
];

var COPY_IDS 					= [
	{
		copy_from 		: 'DEMO',						/*Node ID, which one you want to copy its innerHTML.*/
		copy_to 		: {
			container_id 	: 'DEMO_ID',				/*Container node ID, Where you want to place. (Ex: "container")*/
			new_id	 		: 'DEMO_ID',				/*New ID, Which one for CSS*/
			insert_index 	: 'firstChild',				/*"firstChild","lastChild" or any Specific index*/
			is_copied 		: false
		}
	}
];

var HIDE_IDS 				= [
	{
		node_conf 		: {
			node_id 	: 'DEMO',						/*Node ID, Which one you want to hide*/
			display_as 	: 'block',						/*like block,inline-block,inline,table-cell*/
			is_hide 	: false
		}
	}
];

var SP_MENU_CONFIG 				= {
	menu_location 			: {
		container_id 	: 'DEMO',						/*Where menu will place(Container ID)*/
		insert_index 	: 'firstChild',					/*"firstChild","lastChild" or any Specific index*/
	},
	sie_logo 			: {
		source 			: 'site_logo.jpg',
		alt 			: 'ALT TEXT',
	},
	click_icon 			: {
		source 			: 'responsive_menu_icon.png',
		alt 			: 'MENU',
		id 				: 'menu_control'
	},
	menu_container_id	: 'smartphone_menu_container',
	menu_div_id 		: 'logo_and_click_icon',
	menu_ul_id 			: 'smartphone_menu',
	menu_toggle_class	: {
		collapse_class 	: 'closed',
		expand_class 	: 'opened'
	},
	menu_items 			: [
		{
			item 		: 'TOP',
			link 		: 'index.html',
			li_class 	: ''
		},
		{
			item 		: 'チケットの使い方',
			link 		: 'beginner.html',
			li_class 	: ''
		},
		{
			item 		: '体験プログラムを探す',
			link 		: 'program.html',
			li_class 	: ''
		},
		{
			item 		: 'チケット購入',
			link 		: 'buy.html',
			li_class 	: ''
		},
		{
			item 		: '体験バスMAP',
			link 		: 'map.html',
			li_class 	: ''
		}
	]
};

/*IF YOU WANT TO ADD BODY CLASS, FOLLOW BELLOW VARIABLE*/

var BODY_CLASS = [
	{
		file_path_names 	: [			
			'index.html',
			''
			/*Another file path here*/
		],
		body_class_name 	: 'myOtona'
	},
	{
		file_path_names 	: [
			'map.html'
			/*Another file path here*/
		],
		body_class_name 	: 'mymap'
	},
	{
		file_path_names 	: [
			'sitemap.html'
			/*Another file path here*/
		],
		body_class_name 	: 'mysitemap'
	},
	{
		file_path_names 	: [
			'qanda.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myqanda'
	},
	{
		file_path_names 	: [
			'privacy.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myprivacy'
	},
	{
		file_path_names 	: [
			'enquete.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myFAQ'
	},
	{
		file_path_names 	: [
			'inquiry.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myQuery'
	},
	{
		file_path_names 	: [
			'detail/detail01'
			/*Another file path here*/
		],
		body_class_name 	: 'myDetail'
	},
	{
		file_path_names 	: [
			'detail/detail02'
			/*Another file path here*/
		],
		body_class_name 	: 'myDetail'
	},
	{
		file_path_names 	: [
			'program/'
			/*Another file path here*/
		],
		body_class_name 	: 'myPlan'
	},
	{
		file_path_names 	: [
			'program/plan_detail'
			/*Another file path here*/
		],
		body_class_name 	: 'myPlan'
	},
	
	{
		file_path_names 	: [
			'buy.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myBuy'
	},
	{
		file_path_names 	: [
			'omiyage.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myOmiyage'
	},
	{
		file_path_names 	: [
			'beginner.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myBegin'
	},
	{
		file_path_names 	: [
			'recommend/'
			/*Another file path here*/
		],
		body_class_name 	: 'myRecommend'
	},
	{
		file_path_names 	: [
			'program.html'
			/*Another file path here*/
		],
		body_class_name 	: 'myPlan'
	},
];

function current_index(NODE_ID){
	var child = document.getElementById(NODE_ID);
	if (child) {
		var parent = child.parentNode;
		var index = Array.prototype.indexOf.call(parent.children, child);
		return index;
	}
	return 0;
}

var SMARTPHONE 				= {

	get_by_id : function(ID){
		return document.getElementById(ID)
	},

	create_html_tag : function(TAG_NAME){
		return document.createElement(TAG_NAME);
	},

	insert_with_specific_position : function(node,container,index){
		if (typeof index =='string') {
			switch(index){
				case 'firstChild' 	: {
					container.insertBefore(node,container.firstChild);
				} 	break;
				case 'lastChild' 	: {
					container.insertBefore(node,container.lastChild);
				}	break;
				default 	: { /*No Action*/ }	break;
			}
		}else{
			container.insertBefore(node,container.childNodes[index]);
		}
	},

	replace_all_replace_ids : function(){
		var obj,node;
		for(var index in REPLACE_IDS){
			obj 	= REPLACE_IDS[index];
			node 	= this.get_by_id(obj.replace_from);
			if (node) {	/*If ID found, Then replace it*/
				node.setAttribute('id',obj.replace_with);

				//console.log('Replacing ID="'+obj.replace_from+'" to ID="'+obj.replace_with+'"');
			}
		}
	},

	restore_all_replace_ids : function(){
		var obj,node;
		for(var index in REPLACE_IDS){
			obj 	= REPLACE_IDS[index];
			node 	= this.get_by_id(obj.replace_with);
			if (node) {	/*If ID found, Then restore it*/
				node.setAttribute('id',obj.replace_from);

				//console.log('Restore ID="'+obj.replace_with+'" to ID="'+obj.replace_from+'"');
			}
		}
	},

	move_all_move_ids : function(){
		var obj,container,node,index;
		for(var x in MOVE_IDS){
			obj 		= MOVE_IDS[x];

			if (obj.move_to.is_moved) {
				continue;
			}
			MOVE_IDS[x].move_to.is_moved = true;

			container 	= this.get_by_id(obj.move_to.container_id);
			node 		= this.get_by_id(obj.move_from);
			index 		= obj.move_to.insert_index;

			if (container && node) {	/*If CONTAINER and NODE is valid/found*/
				this.insert_with_specific_position(node,container,index);
			}

		}
	},

	restore_all_move_ids : function(){
		var obj,container,node,index;
		for(var x in MOVE_IDS){
			obj 		= MOVE_IDS[x];

			if (!obj.move_to.is_moved) {
				continue;
			}
			MOVE_IDS[x].move_to.is_moved = false;

			container 	= this.get_by_id(obj.move_to.container_id);
			node 		= this.get_by_id(obj.move_from);
			index 		= obj.move_to.current_index;

			if (container && node) {	/*If CONTAINER and NODE is valid/found*/
				if (typeof index =='string') {
					switch(index){
						case 'firstChild' 	: {
							container.insertBefore(node,container.firstChild);
						} 	break;
						case 'lastChild' 	: {
							container.insertBefore(node,container.lastChild);
						}	break;
						default 	: { /*No Action*/ }	break;
					}
				}else{
					container.insertBefore(node,container.childNodes[index]);
				}
			}

		}
	},

	hide_all_ids : function(){
		var obj,hide_from;
		for(var index in HIDE_IDS){
			obj = HIDE_IDS[index];

			HIDE_IDS[index].node_conf.is_hide = true;

			hide_from = this.get_by_id(obj.node_conf.node_id);
			if (hide_from) {
				hide_from.style.display = 'none';
				//console.log('Hiding ID="'+obj.node_conf.node_id+'"');
			}
		}
	},

	show_all_ids : function(){
		var obj,show_from;
		for(var index in HIDE_IDS){
			obj = HIDE_IDS[index];

			if (!obj.node_conf.is_hide) {
				continue;
			}

			show_from = this.get_by_id(obj.node_conf.node_id);
			if (show_from) {
				show_from.style.display = obj.node_conf.display_as;
				//console.log('Showing ID="'+obj.node_conf.node_id+'" as "'+obj.node_conf.display_as+'"');
			}
		}
	},

	copy_all_ids : function(){
		var obj,container,node,index,div;
		for(var x in COPY_IDS){
			obj 		= COPY_IDS[x];

			if (obj.copy_to.is_copied) {
				continue;
			}
			COPY_IDS[x].copy_to.is_copied = true;

			container 	= this.get_by_id(obj.copy_from);
			node 		= this.get_by_id(obj.copy_to.container_id);
			index 		= obj.copy_to.insert_index;

			if (container && node) {	/*If CONTAINER and NODE is valid/found*/
				div 	= this.create_html_tag('div');
				div.setAttribute('id',obj.copy_to.new_id);
				div.innerHTML = container.innerHTML;
				this.insert_with_specific_position(div,node,index);
			}

		}
	},

	set_menu_click_action : function(){
		var click_btn 	= this.get_by_id(SP_MENU_CONFIG.click_icon.id);
		var toggle_id 	= this.get_by_id(SP_MENU_CONFIG.menu_ul_id);
		if (click_btn && toggle_id) {
			click_btn.onclick = function(){
				if (toggle_id.className.indexOf(SP_MENU_CONFIG.menu_toggle_class.collapse_class)!=-1) {
					toggle_id.setAttribute('class',SP_MENU_CONFIG.menu_toggle_class.expand_class);
				}else{
					toggle_id.setAttribute('class',SP_MENU_CONFIG.menu_toggle_class.collapse_class);
				}
			}
		}else{
			console.log('Click ID="'+SP_MENU_CONFIG.click_icon.id+'" or toggle ID="'+SP_MENU_CONFIG.menu_ul_id+'" is not found!');
		}
	},

	create_smartphone_menu : function(){

		if (this.get_by_id(SP_MENU_CONFIG.menu_container_id)) {	/*If menu is already created*/
			return false;
		}

		//console.log('Creating SP menu...');

		var obj,menu,menu_container,menu_location,menu_index;
		
		menu_container = this.create_html_tag('div');
		menu_container.setAttribute('id',SP_MENU_CONFIG.menu_container_id);
		
		menu 	= '<div id="'+SP_MENU_CONFIG.menu_div_id+'">';
		menu 	   += 	'<a href="'+DOMAIN_NAME+'"><img src="'+DOMAIN_NAME+SP_MENU_CONFIG.sie_logo.source+'" alt="'+SP_MENU_CONFIG.sie_logo.alt+'" /></a>';
		menu 	   += 	'<img id="'+SP_MENU_CONFIG.click_icon.id+'" src="'+DOMAIN_NAME+SP_MENU_CONFIG.click_icon.source+'" alt="'+SP_MENU_CONFIG.click_icon.alt+'" />';
		menu 	   += '</div>';
		menu 	   += '<ul id="'+SP_MENU_CONFIG.menu_ul_id+'" class="'+SP_MENU_CONFIG.menu_toggle_class.collapse_class+'">';
		for( var index in SP_MENU_CONFIG.menu_items){
			obj = SP_MENU_CONFIG.menu_items[index];

			menu    += '<li class="'+obj.li_class+'"><a href="'+DOMAIN_NAME+obj.link+'">'+obj.item+'</a></li>';
		}
		menu 	   += '</ul>';
		menu_container.innerHTML = menu;

		menu_location = this.get_by_id(SP_MENU_CONFIG.menu_location.container_id);
		menu_index 	  = SP_MENU_CONFIG.menu_location.insert_index;
		
		if (menu_location) {
			this.insert_with_specific_position(menu_container,menu_location,menu_index);
			this.set_menu_click_action();	/*Activate menu click action*/
		}else{
			menu_location = document.getElementsByTagName('body');
			menu_location = menu_location[0];
			this.insert_with_specific_position(menu_container,menu_location,menu_index);
			this.set_menu_click_action();	/*Activate menu click action*/
			console.log('SP menu location ID="'+SP_MENU_CONFIG.menu_location.container_id+'" is not found.');
		}
		
	}

};





function smartphone_screen(){
	var current_width 		= window.innerWidth;

	//console.log('Screen width : '+current_width);

	if (current_width<=SMARTPHONE_SCREEN) {
		/*Initialize Config For Smartphone View*/
		SMARTPHONE.create_smartphone_menu();
		SMARTPHONE.replace_all_replace_ids();
		SMARTPHONE.move_all_move_ids();
		SMARTPHONE.hide_all_ids();
		SMARTPHONE.copy_all_ids();
		remove_a_tag_hash();
	}else{
		/*Restore Config For PC View*/
		SMARTPHONE.restore_all_replace_ids();
		SMARTPHONE.restore_all_move_ids();
		SMARTPHONE.show_all_ids();
	}
}

smartphone_screen();
window.onresize = smartphone_screen;

function remove_a_tag_hash(){
	var a = SMARTPHONE.get_by_id(SP_MENU_CONFIG.menu_location.container_id);
	if (a) {
		if (a.nodeName.toUpperCase()=='A' && a.href!='#') {
			global_href = a.href;
			a.href = '#';
		};
	};
}

window.onload = function(){
	var domain = window.location.origin;
	var path = window.location.pathname;
	var fullPath = domain+path;

	for(var x in BODY_CLASS){
		if (BODY_CLASS[x].file_path_names.length) {
			var pages  = BODY_CLASS[x].file_path_names;
			for(var i=0; i<pages.length; i++){
				if (fullPath.indexOf(pages[i])>=0) {
					if (window.innerWidth<=SMARTPHONE_SCREEN) {
						add_class_to_body(BODY_CLASS[x].body_class_name);
					}
				};
			}
		};
	}

	function add_class_to_body(class_name){
		var body = document.getElementsByTagName('body');
		body = body[0];
		var body_class = body.getAttribute('class');
		if (body_class) {
			class_name = ' ' + class_name;
			body.setAttribute('class',body_class+class_name);
		}else{
			body.setAttribute('class',class_name);
		}
		console.log(class_name);
	}
}
