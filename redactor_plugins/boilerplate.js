$.Redactor.prototype.boilerplate = function()
{
    return {
        init: function()
        {
            var dropdown = {},
                button = this.button.add('boilerplate', 'Boilerplate');

            dropdown.addHero = {title: 'Hero', func: this.boilerplate.addHero};
            dropdown.addIntro = {title: 'Intro', func: this.boilerplate.addIntro};
            dropdown.addCallout = {title: 'Callout', func: this.boilerplate.addCallout};
            dropdown.addButton = {title: 'Button', func: this.boilerplate.addButton};

            this.button.addDropdown(button, dropdown);
        },
        addHero: function(buttonName)
        {
            this.buffer.set();
            var html = this.selection.html();
            this.selection.replace('<div class="hero"><div class="copy">' + html + '</div></div>')
        },
        addIntro: function(buttonName) {
            this.buffer.set();
            var p = document.createElement('p');
            p.innerText = this.selection.text();
            this.selection.replace('<div class="intro">' + p.outerHTML + '</div>');
        },
        addCallout: function(buttonName) {
            this.buffer.set();
            var p = document.createElement('p');
            p.innerText = this.selection.text();
            this.selection.replace('<div class="callout">' + p.outerHTML + '</div>');
        },
        addButton: function(buttonName) {
            this.buffer.set();
            this.inline.addClass('button');
        },
    };
};
