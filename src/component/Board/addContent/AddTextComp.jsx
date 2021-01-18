import { observer } from 'mobx-react';
import RootStore from '../../../RootStore';
import styled from 'styled-components';

const AddTextComp = observer(() => {

    const { AddContentStore } = RootStore();
    const content = AddContentStore.content;

    const Textarea = styled.textarea`

        resize: none;
        width: 60vw;
        height: 15vh;

    `;

    const growHeight = () => {

        const tag = document.querySelector('#body-textarea');

        if ( (tag.clientHeight !== tag.scrollHeight) && (tag.scrollHeight < 200) ) {
            
            tag.style.height = tag.scrollHeight + "px";

        } else {
            
            tag.maxLength = 300

        }
    };

    return (
            <Textarea
                name="body"
                id="body-textarea"
                placeholder="오늘 하루는 어땠나요?"
                rows="5"
                autoFocus
                onInput={growHeight}
                onChange={ e => content.setText(e.target.value) }
                />
    );
});

export default AddTextComp;