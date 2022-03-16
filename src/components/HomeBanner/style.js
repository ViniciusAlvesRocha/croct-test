import styled from 'styled-components'

const StyledHomeBanner = styled.div`
    height: 100vh;
    display: flex;
    padding-left: 30px;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);

    .btn-home-banner {
        padding: 15px;
        border: none;
        background-color: rgb(104, 211, 154);
        color: rgb(255, 255, 255);
        font-weight: 700;
    }

    .banner-title {
        color: rgb(104, 211, 154);
        font-size: 2em;
        width: 350px;
    }

    .banner-subtitle {
        color: rgb(80, 80, 80);
        font-size: 1em;
        margin-bottom: 30px;
        width: 400px;
    }
`

export default StyledHomeBanner;