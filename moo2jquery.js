var jQuery = function(sel) {
    var els = $$(sel);
    return $extend(els, jMethods);
}
jQuery.fn = jMethods = {
    attr: function(name, value) {
        if ($type(name) == 'object') var ret = this.setProperties(name);
        var ret = (!value) ? this.getProperty(name) : this.setProperty(name, value);
        return $extend(ret, jMethods);
    },
    removeAttr: function(name) {
        var ret = this.removeProperty(name);
        return $extend(ret, jMethods);
    },
    html: function(html) {
        if ($type(html) == 'undefined') var ret = this.innerHTML;
        this.set('html', html);
        return $extend(ret, jMethods);
    },
    text: function(text) {
        if (!text) var ret = this.innerText;
        this.set('text', text);
        return $extend(ret, jMethods);
    },
    val: function(value) {
        var ret = (!value) ? this.getProperty("value") : this.setProperty("value", value);
        return $extend(ret, jMethods);
    },
    append: function(content) {
        var ret = this.inject(content);
        return $extend(ret, jMethods);
    },
    prepend: function(content) {
        var ret = this.inject(content, 'parent');
        return $extend(ret, jMethods);
    },
    after: function(content) {
        var ret = this.inject(content, 'after');
        return $extend(ret, jMethods);
    },
    before: function(content) {
        var ret = this.inject(content, 'before');
        return $extend(ret, jMethods);
    },
    wrap: function(els) {
        var ret = this.wraps(els);
        return $extend(ret, jMethods);
    },
    add: function(expr) {
        var ret = ($type(expr) == 'string') ? this.set("html", expr) : this.inject(expr);
        return $extend(ret, jMethods);
    },
    remove: function() {
        this.erase();
        return $extend(ret, jMethods);
    },
    css: function(name, value) {
        if ($type(name) == 'object') var ret = this.setStyles(name);
        var ret = (!value) ? this.getStyle(name) : this.setStyle(name, value);
        var ret = $extend(ret, jMethods);
        return $extend(ret, jMethods);
    },
    children: function(expr) {
        var ret = this.getChildren(expr);
        return $extend(ret, jMethods);
    },
    find: function(expr) {
        var ret = this.filter(expr);
        return $extend(ret, jMethods);
    },
    next: function(expr) {
        var ret = this.getNext(expr);
        return $extend(ret, jMethods);
    },
    nextAll: function(expr) {
        var ret = this.getNextAll(expr);
        return $extend(ret, jMethods);
    },
    parent: function(expr) {
        var ret = this.getParent(expr);
        return $extend(ret, jMethods);
    },
    parents: function(expr) {
        var ret = this.getParents(expr);
        return $extend(ret, jMethods);
    },
    prev: function(expr) {
        var ret = this.getPrevious(expr);
        return $extend(ret, jMethods);
    },
    prevAll: function(expr) {
        var ret = this.getAllPrevious(expr);
        return $extend(ret, jMethods);
    },
    bind: function(type, func) {
        var ret = this.addEvent(type, func);
        return $extend(ret, jMethods);
    },
    unbind: function(type, func) {
        var ret = this.removeEvent(type, func);
        return $extend(ret, jMethods);
    },
    blur: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("blur", fn);
        this.fireEvent("blur");
        return $extend(ret, jMethods);
    },
    focus: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("focus", fn);
        this.fireEvent("focus");
        return $extend(ret, jMethods);
    },
    load: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("load", fn);
        this.fireEvent("load");
        return $extend(ret, jMethods);
    },
    resize: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("resize", fn);
        this.fireEvent("resize");
        return $extend(ret, jMethods);
    },
    scroll: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("scroll", fn);
        this.fireEvent("scroll");
        return $extend(ret, jMethods);
    },
    unload: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("unload", fn);
        this.fireEvent("unload");
        return $extend(ret, jMethods);
    },
    click: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("click", fn);
        this.fireEvent("click");
        return $extend(ret, jMethods);
    },
    dblclick: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("dblclick", fn);
        this.fireEvent("dblclick");
        return $extend(ret, jMethods);
    },
    mousedown: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mousedown", fn);
        this.fireEvent("mousedown");
        return $extend(ret, jMethods);
    },
    mouseup: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mouseup", fn);
        this.fireEvent("mouseup");
        return $extend(ret, jMethods);
    },
    mousemove: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mousemove", fn);
        this.fireEvent("mousemove");
        return $extend(ret, jMethods);
    },
    mouseover: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mouseover", fn);
        this.fireEvent("mouseover");
        return $extend(ret, jMethods);
    },
    mouseout: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mouseout", fn);
        this.fireEvent("mouseout");
        return $extend(ret, jMethods);
    },
    mouseenter: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mouseenter", fn);
        this.fireEvent("mouseenter");
        return $extend(ret, jMethods);
    },
    mouseleave: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("mouseleave", fn);
        this.fireEvent("mouseleave");
        return $extend(ret, jMethods);
    },
    change: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("change", fn);
        this.fireEvent("change");
        return $extend(ret, jMethods);
    },
    select: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("select", fn);
        this.fireEvent("select");
        return $extend(ret, jMethods);
    },
    submit: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("submit", fn);
        this.fireEvent("submit");
        return $extend(ret, jMethods);
    },
    keydown: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("keydown", fn);
        this.fireEvent("keydown");
        return $extend(ret, jMethods);
    },
    keypress: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("keypress", fn);
        this.fireEvent("keypress");
        return $extend(ret, jMethods);
    },
    keyup: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("keyup", fn);
        this.fireEvent("keyup");
        return $extend(ret, jMethods);
    },
    error: function(fn) {
        if ($type(fn) == 'function') var ret = this.addEvent("error", fn);
        this.fireEvent("error");
        return $extend(ret, jMethods);
    },
    ready: function(fn) {
        window.addEvent('domready', fn);
    }
};

/*
$extend(jQuery, {
	trigger: function( type, data ) {
		return this.each(function(){
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if( this[0] ){
			var event = jQuery.Event(type);
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}		
	}
	});
*/

/* CACHE */
var expando = "jQuery" + now(),
uuid = 0;
function now() {
    return + new Date;
}

$extend(jQuery, {
    cache: {},
    data: function(elem, name, data) {
        var id = elem[expando];
        if (!id) id = elem[expando] = ++uuid;
        if (name && !jQuery.cache[id]) jQuery.cache[id] = {};
        if (data !== undefined) jQuery.cache[id][name] = data;
        return name ? jQuery.cache[id][name] : id;
    },
    removeData: function(elem, name) {
        elem = elem;
        var id = elem[expando];
        if (name) {
            if (jQuery.cache[id]) {
                delete jQuery.cache[id][name];
                name = "";
                for (name in jQuery.cache[id])
                break;
                if (!name) jQuery.removeData(elem);
            }
        } else {
            try {
                delete elem[expando];
            } catch(e) {
                if (elem.removeAttribute) elem.removeAttribute(expando);
            }
            delete jQuery.cache[id];
        }
    },
    queue: function(elem, type, data) {
        if (elem) {
            type = (type || "fx") + "queue";
            var q = jQuery.data(elem, type);
            if (!q || jQuery.isArray(data)) q = jQuery.data(elem, type, jQuery.makeArray(data));
            else if (data) q.push(data);
        }
        return q;
    },
    dequeue: function(elem, type) {
        var queue = jQuery.queue(elem, type),
        fn = queue.shift();
        if (!type || type === "fx") fn = queue[0];
        if (fn !== undefined) fn.call(elem);
    }
});

$extend(jQuery.fn, {
    data: function(key, value) {
        var parts = key.split(".");
        parts[1] = parts[1] ? "." + parts[1] : "";

        if (value === undefined) {
            var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

            if (data === undefined && this.length) data = jQuery.data(this[0], key);

            return data === undefined && parts[1] ? this.data(parts[0]) : data;
        } else return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function() {
            jQuery.data(this, key, value);
        });
    },

    removeData: function(key) {
        return this.each(function() {
            jQuery.removeData(this, key);
        });
    },
    queue: function(type, data) {
        if (typeof type !== "string") {
            data = type;
            type = "fx";
        }

        if (data === undefined) return jQuery.queue(this[0], type);

        return this.each(function() {
            var queue = jQuery.queue(this, type, data);

            if (type == "fx" && queue.length == 1) queue[0].call(this);
        });
    },
    dequeue: function(type) {
        return this.each(function() {
            jQuery.dequeue(this, type);
        });
    }
});