import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '~theme/sp-theme/elements/Box';
import Text from '~theme/sp-theme/elements/Text';
import Heading from '~theme/sp-theme/elements/Heading';
import Logo from '~theme/sp-theme/elements/UI/Logo';
import Container from '~theme/sp-theme/components/UI/Container';
import Grid from '@material-ui/core/Grid';
import FooterWrapper, {
  List,
  ListItem,
  CopyrightText,
  SocialList,
  SelectWrapper,
} from './footer.style';

const LogoImage = '/images/logo.svg';

import { menuWidgets, socialLinks } from '~config/stubData';

const Footer = ({ row, col, colOne, colTwo }) => {
  return (
    <FooterWrapper>
      <Container maxWidth="md" align="center">
        <Grid container spacing={3}>
          {menuWidgets.map(widget => (
            <Grid item item md={4} key={`footer__widget-key${widget.id}`}>
              <Heading className="widget_title" as="h3" content={widget.title} />
              <List>
                {widget.menu.map(item => (
                  <ListItem key={`list__item-${item.id}`}>
                    <Link href={item.link}>
                      <a>{item.text}</a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '30%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '70%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '33.33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default Footer;
