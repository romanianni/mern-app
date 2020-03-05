import React, { useState } from 'react';

const CreateExercise = (props) => {
    
    const [exercise, setExercise] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    });

    const onChangeForm = (e) => {
        setExercise({
            ...exercise,
            [e.target.name]: e.target.value
        })
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log('submited')
    };
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-sm">
                        <div className="input-group mb-3">
                            <input onChange={onChangeForm} className="form-control" name="username" type="text"/>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={onChangeForm} className="form-control" name="description" type="text"/>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={onChangeForm} className="form-control" name="duration" type="text"/>
                        </div>
                        <div className="input-group mb-3">
                            <input onChange={onChangeForm} className="form-control" name="date" type="text"/>                             
                        </div>
                        <button type="button" className="btn btn-primary">Send</button>
                    </div>
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">
                        
                    </div>
                </div>
            </form>
            <p>{exercise.username}</p>
            <p>{exercise.description}</p>
            <p>{Number(exercise.duration)}</p>
            <p>{exercise.date.toString()}</p>
        </div>
    )
}

export default CreateExercise;