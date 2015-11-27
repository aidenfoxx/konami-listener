/** 
 * Konami Listener
 * 
 * @version    1.0.0
 * @author     Aiden Foxx
 * @license    MIT License 
 * @copyright  2015 Aiden Foxx
 * @link       http://github.com/aidenfoxx
 * @twitter    @furiousfoxx
 */

'use strict';

/**
 * @constructor
 */
function KonamiListener(callback, resetTimeout)
{
    if (!(this instanceof KonamiListener))
        return new KonamiListener(callback, resetTimeout);

	var input = '';
	var timeout = null;

	window.addEventListener('keyup', function(e) {
		this.input += e.which;
		this.input === '38384040373937396665' && callback();
		clearTimeout(this.timeout);
		this.timeout = setTimeout(function() { this.input = ''; }.bind(this), resetTimeout || 2000);
	}.bind(this));
}