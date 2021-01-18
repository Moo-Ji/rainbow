import { observer } from 'mobx-react';
import RootStore from '../../../RootStore';
import styled from 'styled-components';

const AddPhotoComp = observer(() => {

    const { AddContentStore } = RootStore();
    const content = AddContentStore.content;

    const Label = styled.label`

        width: 30vw;
        height: 5vh;

    `;

    const handleOnFiles = (e) => {

        e.preventDefault();

        let files = e.target.files;

        for (const file of Object.values(files)) {

            const reader = new FileReader();

            reader.onload = (e) => {
                
                const imageSrc = e.target.result;
                content.setImage(imageSrc);

                // const tags = document.getElementsByClassName('preview-image');
                // for (const [_, tag] of Object.entries(tags)) {



                // };



            }
            reader.readAsDataURL(file);
            

        };


    }

    return (
        <>  
            <Label
                htmlFor="img-uploads">
                    아이콘
            </Label>            
            <input
                id="img-uploads"
                name="image"
                type="file"
                accept="imgaes"
                multiple
                hidden
                onChange={handleOnFiles} />
        </>
    )
});

export default AddPhotoComp;