import styled from 'styled-components';
const Re = styled.div`
      background-image: url(${props => props.$url});
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
    `;
export default function BackgroundImg({url,children}){
    return <>
        <Re $url={url}>{children}</Re>
    </>;
}