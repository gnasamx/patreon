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

export default function Dropdown({ list, onClick, isOpen, onSelectItem }) {
  return (
    <>
      <DropdownButton onClick={onClick}>
        <DropdownTextIconWrapper>
          <DropdownTextField>
            <TextFiledSpan>Dropdown</TextFiledSpan>
          </DropdownTextField>
          <DropdownIconField>
            <ArrowDown />
          </DropdownIconField>
        </DropdownTextIconWrapper>
      </DropdownButton>
      {isOpen && <DropdownList list={list} onSelectItem={onSelectItem} />}
    </>
  );
}

function DropdownList(props) {
  const { list, onSelectItem } = props;

  console.log("==: onSelectItem: ", onSelectItem);

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
  const { item } = props,
    { label } = item;

  return (
    <DropdownListLi>
      <DropdownListLiWrapper>
        <DropdownListLiSpan>{label}</DropdownListLiSpan>
      </DropdownListLiWrapper>
    </DropdownListLi>
  );
}
