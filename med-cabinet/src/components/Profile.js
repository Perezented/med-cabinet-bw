import React from 'react'

const signSchema = yup.object().shape({
    name: yup.string().min(2).required('Please Enter a Name Longer Than 2 Characters'),
    email: yup.string().required('Please Enter A Valid Email'),
    password: yup.string().min(4).required('Please Enter A Password Of 4 Characters Or More')
})

const Profile = () => {

    //button state
    const [disabled, setDisabled]= useState(true)

    //user State
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    //error state
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',

    })

    //Handles Form Changes
    const handleChange = event => {
        event.persist()
        setUser({

            ...user,
            [event.target.name]: event.target.value

        })
        validateChange(event)

    }

    //actually validates
    const validateChange = event => {
        yup.reach(signSchema, event.target.name)
            .validate(event.target.type === event.target.value)
            .then(valid => {
                
                setError({
                
                    ...error,
                    [event.target.name]: ""
                   
                });
                console.log(error)
            })
            .catch(err => {
                console.log(err)
                setError({
                    ...error,
                    [event.target.name]: err.errors[0]
                })
            })
    }

    //checks validity
    useEffect(() => {
        signSchema.isValid(newUser).then(valid => {
            setDisabled(!valid);
            console.log(valid)
        })
        
    }, [newUser]);


    return (
        <div className='edit'>
            <h2>Edit Your Account</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor='name' name='name' >Name*</label>

                <br />
                <input
                    type='text'
                    name='name'
                    value={newUser.name}
                    onChange={handleChange}
                />
                <br />

                {error.name.length > 0 ? <p>{error.name}</p> : null}

                <label htmlFor='email' name='email' >Email*</label>
                <br />

                <input
                    type='text'
                    name='email'
                    value={newUser.email}
                    onChange={handleChange}
                />
                <br />

                {error.email.length > 0 ? <p>{error.email}</p> : null}

                <label htmlFor='password' name='password' >Password*</label>
                <br />

                <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    onChange={handleChange}
                />
                <br />

                {error.password.length > 0 ? <p>{error.password}</p> : null}

                <button disabled={disabled}>Submit</button>
            </form>
        </div>)
}

export default Profile