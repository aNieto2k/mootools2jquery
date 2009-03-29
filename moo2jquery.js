
// jQuery 
var jMethods = 	{
					attr: function(name, value){
						if ($type(name) == 'object')  return this.setProperties(name);
						return  (!value)?this.getProperty(name):this.setProperty(name, value);
					},
					removeAttr: function(name){
						return this.removeProperty(name);
					},
					html: function(html){
						if (!html) return this.innerHTML;
						this.set('html', html);
					},
					text: function(text){
						if (!text) return this.innerText;
				        this.set('text', text);
					},
					val: function(value){
						return (!value)?this.getProperty("value"):this.setProperty("value", value);
					},
					append: function(content){
						return this.inject(content);
					},
					prepend: function(content) {
						return this.inject(content, 'parent');
					},
					after: function(content){
						return this.inject(content, 'after');
					},
					before: function(content){
						return this.inject(content, 'before');
					},
					wrap: function(els){
						return this.wraps(els);
					},
					add: function(expr){
						return ($type(expr) == 'string')?this.set("html", expr):this.inject(expr);
					},
					remove: function(){
						this.erase();
					},
					css: function(name, value){
						if ($type(name) == 'object')  return this.setStyles(name);
						return  (!value)?this.getStyle(name):this.setStyle(name, value);
					},
					children: function(expr){
						return this.getChildren(expr);
					},
					find: function(expr){
						return this.filter(expr);
					},
					next: function(expr){
						return this.getNext(expr);
					},
					nextAll: function(expr){
						return this.getNextAll(expr);		
					},
					parent: function(expr){
						return this.getParent(expr);
					},
					parents: function(expr){
						return this.getParents(expr);
					},
					prev: function(expr){
						return this.getPrevious(expr);
					},
					prevAll: function(expr){
						return this.getAllPrevious(expr);
					},
					bind: function(type, func){
						return this.addEvent(type, func);
					},
					unbind: function(type, func){
						return this.removeEvent(type, func);
					},
					blur: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("blur", fn);
						this.fireEvent("blur");
					},
					focus: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("focus", fn);
						this.fireEvent("focus");	
					},
					load: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("load", fn);
						this.fireEvent("load");
					},
					resize: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("resize", fn);
						this.fireEvent("resize");
					},
					scroll: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("scroll", fn);
						this.fireEvent("scroll");
					},
					unload: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("unload", fn);
						this.fireEvent("unload");
					},
					click: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("click", fn);
						this.fireEvent("click");
					},
					dblclick: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("dblclick", fn);
						this.fireEvent("dblclick");
					},
					mousedown: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mousedown", fn);
						this.fireEvent("mousedown");
					},
					mouseup: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mouseup", fn);
						this.fireEvent("mouseup");
					},
					mousemove: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mousemove", fn);
						this.fireEvent("mousemove");
					},
					mouseover: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mouseover", fn);
						this.fireEvent("mouseover");
					},
					mouseout: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mouseout", fn);
						this.fireEvent("mouseout");
					},
					mouseenter: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mouseenter", fn);
						this.fireEvent("mouseenter");
					},
					mouseleave: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("mouseleave", fn);
						this.fireEvent("mouseleave");
					},
					change: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("change", fn);
						this.fireEvent("change");
					},
					select: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("select", fn);
						this.fireEvent("select");
					},
					submit: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("submit", fn);
						this.fireEvent("submit");
					},
					keydown: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("keydown", fn);
						this.fireEvent("keydown");
					},
					keypress: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("keypress", fn);
						this.fireEvent("keypress");
					},
					keyup: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("keyup", fn);
						this.fireEvent("keyup");
					},
					error: function(fn){
						if($type(fn) == 'function') 
							return this.addEvent("error", fn);
						this.fireEvent("error");
					},
					ready: function(fn){
						window.addEvent('domready', fn);
					}
				};			
				
// Extendemos Element					
Element.implement(jMethods);

// Extendemos Elements
Elements.implement(jMethods);


// Usamos $$ para obtener el elemento
$$(document).ready(function(){
	console.log("Ready");
	
});