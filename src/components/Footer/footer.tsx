import styled from 'styled-components';
import Typography from '@components/Typography/typography';

const Footer: React.FC = () => (
  <FooterContainer>
    <Typography variant="bodySmall">
      <FooterLinks>
        <div>설정</div>
        <Divider>|</Divider>
        <div>서비스정보</div>
        <Divider>|</Divider>
        <div>약관</div>
      </FooterLinks>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <Copyright>Copyright © 사서고생 Corp. All Rights Reserved.</Copyright>
      </div>
    </Typography>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  background: #f1f1f1;
  padding: 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #717171;
`;

const Divider = styled.span`
  margin: 0 14px;
  color: gray;
`;

const Copyright = styled.div`
  font-size: 10px;
  color: #717171;
`;
