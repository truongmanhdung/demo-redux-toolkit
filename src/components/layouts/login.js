import React from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@material-ui/core'

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
function Login(props) {
    return (
        <div style={styles.boxSadow}>
            <form>
                <h3 style={styles.textCenter}>Login</h3>
                <div style={styles.container}>
                    <TextField style={styles.input} type='email' required label="Email" />
                    <TextField style={styles.input} type='password' required label="Password" />
                </div>
                <Button style={styles.marginAuto} variant="contained" type="submit" color="primary">
                    Login
                </Button>
            </form>
        </div>
    )
}

Login.propTypes = {

}

export default Login

