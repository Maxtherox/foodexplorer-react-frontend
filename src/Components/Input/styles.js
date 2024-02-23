import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_500};

    margin-bottom: 3.2rem;
    border-radius: 8px;

    > input {
        height: 4.8rem;
        width: 100%;
        padding: 1.6rem 1.4rem;

        font-size: 1.6rem;
        background-color: ${({theme}) => theme.COLORS.DARK_DARK_900};
        background: transparent;
        border: 0;
        color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_500};
    }

`