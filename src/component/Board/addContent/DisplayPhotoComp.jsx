import { observer } from 'mobx-react';
import RootStore from '../../../RootStore';
import styled from 'styled-components';

const DisplayPhotoComp = observer(( { editable = false } ) => {
    
    const { AddContentStore } = RootStore();
    const content = AddContentStore.content;

    const PreviewImgs = styled.div`

        width: 80vw;
        height: 15vh;
        white-space: nowrap;
        overflow-x: scroll;

    `;

    const PreviewImg = styled.img`

        height: 100%;

    `;

    const handleOnMouseOver = (e) => {
        
        const style = e.target.style;

        if (editable) {
            
            style.filter ? style.filter = "" : style.filter = "grayscale(100%)";

        }

    };

    const generateImg = content.images.map((e, idx) => {
        return <PreviewImg key={idx} className="preview-image" src={e} onPointerOver={handleOnMouseOver}/>
    })

    return (
        <>
            <PreviewImgs>
                {generateImg}
            </PreviewImgs>
        </>
    );
});

export default DisplayPhotoComp;