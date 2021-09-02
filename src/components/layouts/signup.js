import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/userSlide';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
const styles = {
    container: {

    },
    input: {
        width: '100%',
        marginBottom: 20,

    },
    textCenter: {
        textAlign: 'center',
        marginBottom: 20,
    },
    boxSadow: {
        marginTop: 40,
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 40,
        boxShadow: "rgb(158 158 158) -1px 4px 9px 3px"
    },
    marginAuto: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}
function SignUp(props) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userName, setUserName] = useState();
    const history = useHistory();
    const onSave = (e) => {
        e.preventDefault();
        const action = signup({
            email, userName, password
        })
        dispatch(action);
        history.push('/')
    }

    return (
        <div style={styles.boxSadow}>
            <form>
                <h3 style={styles.textCenter}>SignUp</h3>
                <div style={styles.container}>
                    <TextField style={styles.input} onChange={(e) => setUserName(e.target.value)} type='name' required label="User Name" />
                    <TextField style={styles.input} onChange={(e) => setEmail(e.target.value)} type='email' required label="Email" />
                    <TextField style={styles.input} onChange={(e) => setPassword(e.target.value)} type='password' required label="Password" />
                </div>
                <Button style={styles.marginAuto} onClick={onSave} variant="contained" type="submit" color="primary">
                    SignUp
                </Button>
            </form>
        </div>
    )
}

SignUp.propTypes = {

}

export default SignUp

