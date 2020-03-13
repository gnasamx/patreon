import React from "react";
import {
  DropdownButton,
  DropdownTextIconWrapper,
  DropdownTextField,
  TextFiledSpan,
  DropdownIconField,
  DropdownListWrapper,
  DropdownListPadding,
  DropdownListOverflow,
  DropdownListUl,
  DropdownListLi,
  DropdownListLiWrapper,
  DropdownListLiSpan
} from "./styled-dropdown";
import ArrowDown from "../icons/arrow-down";
import ArrowUp from "../icons/arrow-up";

export default function Dropdown({
  list,
  onClick,
  isOpen,
  onSelectItem,
  selectedItem
}) {
  return (
    <>
      <DropdownButton onClick={onClick}>
        <DropdownTextIconWrapper>
          <DropdownTextField>
            <TextFiledSpan>{list[selectedItem].label}</TextFiledSpan>
          </DropdownTextField>
          <DropdownIconField>
            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </DropdownIconField>
        </DropdownTextIconWrapper>
      </DropdownButton>
      {isOpen && (
        <DropdownList
          list={list}
          onSelectItem={onSelectItem}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
}

function DropdownList(props) {
  const { list, onSelectItem, selectedItem } = props;

  return (
    <DropdownListWrapper>
      <DropdownListPadding>
        <DropdownListOverflow>
          <DropdownListUl>
            {list &&
              list.map((item, i) => {
                return (
                  <DropdownListItem
                    key={i}
                    item={item}
                    onSelectItem={() => onSelectItem(this, i)}
                    isSelected={selectedItem === i ? true : false}
                  />
                );
              })}
          </DropdownListUl>
        </DropdownListOverflow>
      </DropdownListPadding>
    </DropdownListWrapper>
  );
}

function DropdownListItem(props) {
  const { item, onSelectItem, isSelected } = props,
    { label } = item;

  return (
    <DropdownListLi onClick={onSelectItem}>
      <DropdownListLiWrapper>
        <DropdownListLiSpan isSelected={isSelected}>{label}</DropdownListLiSpan>
      </DropdownListLiWrapper>
    </DropdownListLi>
  );
}
