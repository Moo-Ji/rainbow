import AddPhotoComp from './AddPhotoComp';
import AddTextComp from './AddTextComp';
import DisplayPhotoComp from './DisplayPhotoComp';

const AddContentComp = () => {

    return (
        <>
            <>
                <DisplayPhotoComp editable={true} />
            </>
            <>
                <AddTextComp />
                <AddPhotoComp />
            </>
        </>
    );

};

export default AddContentComp;