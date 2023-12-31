import { useContext, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { logout } from '../../context/actions/auth'
import { GlobalContext } from '../../context/Provider'

const Logout = () => {
    const { authDispatch } = useContext(GlobalContext)

    useEffect(() => {
        logout()(authDispatch)
    }, [])

    return <ActivityIndicator />
}

export default Logout