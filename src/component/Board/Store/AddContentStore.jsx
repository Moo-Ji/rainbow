import { makeAutoObservable } from 'mobx';

const AddContentStore = makeAutoObservable({

    content: {

        text: '',
        setText(value) {
            this.text = value;
        },

        images: [],
        setImage(value) {
            this.images.push(value);
        },
        deleteImage(value) {
            this.images.pop(value)
        }

    }

});

export { AddContentStore };