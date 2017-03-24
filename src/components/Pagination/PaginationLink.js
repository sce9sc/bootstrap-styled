/**
 * A Breadcrumb
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import { mapToCssModules } from '../../styled/utilities/tools';
import A from '../A';
const defaultProps = {
  tag: A,
};

class PaginationItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    'aria-label': PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    cssModule: PropTypes.object,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }

  render() {
    const {
      className,
      cssModule,
      next,
      previous,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'page-link'
    ), cssModule);

    let defaultAriaLabel;
    if (previous) {
      defaultAriaLabel = 'Previous';
    } else if (next) {
      defaultAriaLabel = 'Next';
    }
    const ariaLabel = this.props['aria-label'] || defaultAriaLabel;

    let defaultCaret;
    if (previous) {
      defaultCaret = '\u00ab';
    } else if (next) {
      defaultCaret = '\u00bb';
    }

    let children = this.props.children;
    if (previous || next) {
      children = [
        <span
          aria-hidden="true"
          key="caret"
        >
          {children || defaultCaret}
        </span>,
        <span
          className="sr-only"
          key="sr"
        >
          {ariaLabel}
        </span>,
      ];
    }

    return (
      <Tag
        {...attributes}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </Tag>
    );
  }
}

PaginationItem.defaultProps = defaultProps;

export default PaginationItem;