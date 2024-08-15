import Header from "@/components/common/Header";
import HeaderText from "@/components/common/HeaderText";
import { SETTINGITEMS } from "@/constants/setting";
import { getColor } from "@/styles/color";
import styled from "styled-components";

function Setting() {
  const handleOpenModel = (option: string | undefined) => {
    // if (option === "")
  };

  return (
    <SettingContainer>
      <HeaderText text="설정" />
      <ListContainer>
        {SETTINGITEMS.map((setting, index) => (
          <SettingHeader key={index}>
            {setting.header}
            {setting.items.map((item) => (
              <ItemContainer key={item.id}>
                <SettingItem>{item.title}</SettingItem>
                {item.option && (
                  <SettingItemOption
                    onClick={() => handleOpenModel(item.option)}
                  >
                    {item.option}
                  </SettingItemOption>
                )}
              </ItemContainer>
            ))}
          </SettingHeader>
        ))}
      </ListContainer>
    </SettingContainer>
  );
}

export default Setting;

const SettingContainer = styled.div`
  padding: 64px 24px;
`;

const ListContainer = styled.div`
  padding: 21px 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: -19px;
`;

const SettingHeader = styled.ul`
  list-style: none;
  margin-top: 40px;
  color: ${getColor()};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SettingItem = styled.li`
  color: #878994;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  list-style-type: none;
  margin-top: 24px;
`;
const SettingItemOption = styled.li`
  display: flex;
  justify-content: space-between;
  color: #878994;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  list-style-type: none;
  margin-top: 24px;
`;
