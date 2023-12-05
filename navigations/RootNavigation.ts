import React from 'react';

export const navigationRef = React.createRef<any>();

export const navigate = (name: any, params?: any) => {
    if (navigationRef.current) {
        navigationRef.current?.navigate(name, params)
    }
}

export const getCurrentRoute = () => {
    if (navigationRef.current) {
        return navigationRef.current?.getCurrentRoute()
    }
}
