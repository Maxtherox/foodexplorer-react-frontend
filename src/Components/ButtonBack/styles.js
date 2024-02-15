import styled from "styled-components";

export const Container = styled.button`
            background: none;
            border: none;
            margin-top: 150px;
            margin-bottom: 42px;
            display: flex;
            align-items: flex-start;
            font-size: 24px;
            font-weight: bold;
            color: ${({theme}) => theme.COLORS.LIGHT_LIGHT_300};
            align-items: center;
            gap: 11px;
`