import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ContentsListItemProps extends HTMLProps<HTMLAnchorElement> {
  current?: boolean;
}

const ContentsListItem: React.FC<ContentsListItemProps> = ({ className, current, ...rest }) => (
  <li className={classNames('nhsuk-contents-list__item', className)} aria-current={current ? "page" : rest["aria-current"]}>
    {current ? (
      <span className="nhsuk-contents-list__current" {...rest} />
    ) : (
      <a className="nhsuk-contents-list__link" {...rest} />
    )}
  </li>
);

interface ContentsListProps extends HTMLProps<HTMLDivElement> {
  visuallyHiddenText?: false | string;
}

interface ContentsList extends React.FC<ContentsListProps> {
  Item: typeof ContentsListItem;
}

const ContentsList: ContentsList = ({
  className, children, visuallyHiddenText, role, ...rest
}) => (
  <nav className={classNames('nhsuk-contents-list', className)} role={role} {...rest}>
    {visuallyHiddenText !== false ? (
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
    ) : null}
    <ol className="nhsuk-contents-list__list">{children}</ol>
  </nav>
);

ContentsList.defaultProps = {
  role: 'navigation',
  visuallyHiddenText: 'Contents',
};

ContentsList.Item = ContentsListItem;

export default ContentsList;
