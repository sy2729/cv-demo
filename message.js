
setTimeout(() => {
    controller.init(view);
}, 0);

var view = document.querySelector('.message-board');





let model = {
    fetch: function(){
        var query = new AV.Query('Message');
        return query.find();
    },

    save: function(name, value) {
        var Message = AV.Object.extend('Message');
        var message = new Message();
        return message.save({
            name: name,
            words: value
        })
    }
};





let controller = {
    view: null,
    init: function(view) {
        this.view = view;
        this.form = view.querySelector('form');
        this.messageList = view.querySelector('.message-list');
        this.initAv();
        this.loadMessage();
        this.bindEvent();
        // this
    },
    initAv: function(){
        var APP_ID = 'iUAUdmSeizUpHyu2GxiO0txO-gzGzoHsz';
        var APP_KEY = '92mhpDbB13kiEKSswYht11OW';
        AV.init({
            appId: APP_ID,
            appKey: APP_KEY,
        });
    },
    loadMessage: function(){
       model.fetch().then( (results)=> {
            var message = results.map((i) => {
                return i.attributes
            })
            
            message.forEach((i) => {
                let li = document.createElement('li');
                li.textContent = `${i.name||'N/A'} : ${i.words}`;
                this.messageList.appendChild(li);
            })
        });      
    },

    bindEvent: function(){
        this.form.onsubmit = (e)=> {
          e.preventDefault();
          this.saveMessage();  
        }
    },

    saveMessage: function() {
        let myForm = this.form;
        let messageContent = myForm.querySelector('.message-content');
        let nameEl = myForm.querySelector('.name-content');
        let name = nameEl.value;
        var value = messageContent.value;
        model.save(name, value).then((object)=> {
            alert('submit successfully')
            let li = document.createElement('li');
            li.textContent = nameEl.value + ": " + messageContent.value;
            this.messageList.appendChild(li);
            nameEl.value = '';
            messageContent.value = '';
        })
    }


};
