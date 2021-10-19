import { Meta, Story } from "@storybook/react";

import Table, { ContentClassesType, TableProps } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const General = Template.bind({});
General.args = {
  headers: [
    [
      {
        name: "criticality",
        displayName: "Критичность",
      },
      {
        name: "customer",
        displayName: "Заказчик",
      },
      {
        name: "assignedTo",
        displayName: "Исполнитель",
      },
      {
        name: "created",
        displayName: "Дата создания",
        sortAscFunc: () => {
          console.warn("asc");
        },
        sortDescFunc: () => {
          console.warn("desc");
        },
      },
      {
        name: "finished",
        displayName: "Выполнено",
      },
      {
        name: "status",
        displayName: "Статус",
      },
      {
        name: "child",
        displayName: "Дочерняя",
      },
      {
        name: "parent",
        displayName: "Родительская",
      },
      {
        name: "type",
        displayName: "Тип заявки",
      },
      {
        name: "address",
        displayName: "Адрес",
      },
      {
        name: "assigned",
        displayName: "Назначена по",
      },
      {
        name: "deadline",
        displayName: "Крайный срок закрытия",
      },
      {
        name: "note",
        displayName: "Описание",
      },
    ],
  ],
  content: [
    [
      {
        name: "criticality",
        class: ContentClassesType.criticality,
        data: { text: "Обычная", color: "#1BABE8" },
      },
      {
        name: "customer",
        class: ContentClassesType.text,
        data: { text: "ООО Газпром-И" },
      },
      {
        name: "assignedTo",
        class: ContentClassesType.assignedTo,
        data: { text: "Василев Г.А." },
      },
      {
        name: "created",
        class: ContentClassesType.text,
        data: { text: "10.12.2021 12:04" },
      },
      {
        name: "finished",
        class: ContentClassesType.text,
        data: { text: "18.12.2021 13:45" },
      },
      {
        name: "status",
        class: ContentClassesType.status,
        data: { text: "Отклонена", color: "#F8007A" },
      },
      {
        name: "child",
        class: ContentClassesType.text,
        data: { text: "15" },
      },
      {
        name: "parent",
        class: ContentClassesType.text,
        data: { text: "34-Т009-98-12-289" },
      },
      {
        name: "type",
        class: ContentClassesType.text,
        data: { text: "Ремонт" },
      },
      {
        name: "address",
        class: ContentClassesType.text,
        data: { text: "Санкт-Петербург, Невский пр. 123" },
      },
      {
        name: "assigned",
        class: ContentClassesType.assigned,
        data: { text: "18.04.2021 14:00" },
      },
      {
        name: "deadline",
        class: ContentClassesType.deadline,
        data: { text: "Завтра 12:30" },
      },
      {
        name: "note",
        class: ContentClassesType.note,
        data: { text: "Помыть окна" },
        onChange: (value) => {
          console.warn(value);
        },
      },
    ],
    [
      {
        name: "criticality",
        class: ContentClassesType.criticality,
        data: { text: "Высокий", color: "#ED1940" },
      },
      {
        name: "customer",
        class: ContentClassesType.text,
        data: { text: "ООО Газпром-И" },
      },
      {
        name: "assignedTo",
        class: ContentClassesType.assignedTo,
        data: { text: "Иванов К. Л." },
      },
      {
        name: "created",
        class: ContentClassesType.text,
        data: { text: "10.12.2021 12:04" },
      },
      {
        name: "finished",
        class: ContentClassesType.text,
        data: { text: "18.12.2021 13:45" },
      },
      {
        name: "status",
        class: ContentClassesType.status,
        data: { text: "В работе", color: "#8DC26F" },
      },
      {
        name: "child",
        class: ContentClassesType.text,
        data: { text: "15" },
      },
      {
        name: "parent",
        class: ContentClassesType.text,
        data: { text: "34-Т009-98-12-289" },
      },
      {
        name: "type",
        class: ContentClassesType.text,
        data: { text: "Ремонт" },
      },
      {
        name: "address",
        class: ContentClassesType.text,
        data: { text: "Санкт-Петербург, Невский пр. 123" },
      },

      {
        name: "assigned",
        class: ContentClassesType.assigned,
        data: { text: "18.04.2021 14:00" },
      },
      {
        name: "deadline",
        class: ContentClassesType.deadline,
        data: { text: "Завтра 12:30" },
      },
      {
        name: "note",
        class: ContentClassesType.note,
        data: { text: "Помыть окна" },
      },
    ],
    [
      {
        name: "criticality",
        class: ContentClassesType.criticality,
        data: { text: "Средний", color: "#F9C901" },
      },
      {
        name: "customer",
        class: ContentClassesType.text,
        data: { text: "ООО Газпром-И" },
      },
      {
        name: "assignedTo",
        class: ContentClassesType.assignedTo,
        data: { text: "Бондарчук У. Р." },
      },
      {
        name: "created",
        class: ContentClassesType.text,
        data: { text: "10.12.2021 12:04" },
      },
      {
        name: "finished",
        class: ContentClassesType.text,
        data: { text: "18.12.2021 13:45" },
      },
      {
        name: "status",
        class: ContentClassesType.status,
        data: { text: "В работе", color: "#8DC26F" },
      },
      {
        name: "child",
        class: ContentClassesType.text,
        data: { text: "15" },
      },
      {
        name: "parent",
        class: ContentClassesType.text,
        data: { text: "34-Т009-98-12-289" },
      },
      {
        name: "type",
        class: ContentClassesType.text,
        data: { text: "Ремонт" },
      },
      {
        name: "address",
        class: ContentClassesType.text,
        data: { text: "Санкт-Петербург, Невский пр. 123" },
      },

      {
        name: "assigned",
        class: ContentClassesType.assigned,
        data: { text: "18.04.2021 14:00" },
      },
      {
        name: "deadline",
        class: ContentClassesType.deadline,
        data: { text: "Завтра 12:30" },
      },
      {
        name: "note",
        class: ContentClassesType.note,
        data: { text: "Помыть окна" },
      },
    ],
    [
      {
        name: "criticality",
        class: ContentClassesType.criticality,
        data: { text: "Обычная", color: "#1BABE8" },
      },
      {
        name: "customer",
        class: ContentClassesType.text,
        data: { text: "ООО Газпром-И" },
      },
      {
        name: "assignedTo",
        class: ContentClassesType.assignedTo,
        data: { text: "Василев Г.А." },
      },
      {
        name: "created",
        class: ContentClassesType.text,
        data: { text: "10.12.2021 12:04" },
      },
      {
        name: "finished",
        class: ContentClassesType.text,
        data: { text: "18.12.2021 13:45" },
      },
      {
        name: "status",
        class: ContentClassesType.status,
        data: { text: "В работе", color: "#8DC26F" },
      },
      {
        name: "child",
        class: ContentClassesType.text,
        data: { text: "15" },
      },
      {
        name: "parent",
        class: ContentClassesType.text,
        data: { text: "34-Т009-98-12-289" },
      },
      {
        name: "type",
        class: ContentClassesType.text,
        data: { text: "Ремонт" },
      },
      {
        name: "address",
        class: ContentClassesType.text,
        data: { text: "Санкт-Петербург, Невский пр. 123" },
      },

      {
        name: "assigned",
        class: ContentClassesType.assigned,
        data: { text: "18.04.2021 14:00" },
      },
      {
        name: "deadline",
        class: ContentClassesType.deadline,
        data: { text: "Завтра 12:30" },
      },
      {
        name: "note",
        class: ContentClassesType.note,
        data: { text: "Помыть окна" },
      },
    ],
    [
      {
        name: "criticality",
        class: ContentClassesType.criticality,
        data: { text: "Высокий", color: "#ED1940" },
      },
      {
        name: "customer",
        class: ContentClassesType.text,
        data: { text: "ООО Газпром-И" },
      },
      {
        name: "assignedTo",
        class: ContentClassesType.assignedTo,
        data: { text: "Василев Г.А." },
      },
      {
        name: "created",
        class: ContentClassesType.text,
        data: { text: "10.12.2021 12:04" },
      },
      {
        name: "finished",
        class: ContentClassesType.text,
        data: { text: "18.12.2021 13:45" },
      },
      {
        name: "status",
        class: ContentClassesType.status,
        data: { text: "В работе", color: "#8DC26F" },
      },
      {
        name: "child",
        class: ContentClassesType.text,
        data: { text: "15" },
      },
      {
        name: "parent",
        class: ContentClassesType.text,
        data: { text: "34-Т009-98-12-289" },
      },
      {
        name: "type",
        class: ContentClassesType.text,
        data: { text: "Ремонт" },
      },
      {
        name: "address",
        class: ContentClassesType.text,
        data: { text: "Санкт-Петербург, Невский пр. 123" },
      },
      {
        name: "assigned",
        class: ContentClassesType.assigned,
        data: { text: "18.04.2021 14:00" },
      },
      {
        name: "deadline",
        class: ContentClassesType.deadline,
        data: { text: "Завтра 12:30" },
      },
      {
        name: "note",
        class: ContentClassesType.note,
        data: { text: "Помыть окна" },
      },
    ],
    [
      {
        name: "criticality",
        class: ContentClassesType.criticality,
        data: { text: "Средний", color: "#F9C901" },
      },
      {
        name: "customer",
        class: ContentClassesType.text,
        data: { text: "ООО Газпром-И" },
      },
      {
        name: "assignedTo",
        class: ContentClassesType.assignedTo,
        data: { text: "Василев Г.А." },
      },
      {
        name: "created",
        class: ContentClassesType.text,
        data: { text: "10.12.2021 12:04" },
      },
      {
        name: "finished",
        class: ContentClassesType.text,
        data: { text: "18.12.2021 13:45" },
      },
      {
        name: "status",
        class: ContentClassesType.status,
        data: { text: "В работе", color: "#8DC26F" },
      },
      {
        name: "child",
        class: ContentClassesType.text,
        data: { text: "15" },
      },
      {
        name: "parent",
        class: ContentClassesType.text,
        data: { text: "34-Т009-98-12-289" },
      },
      {
        name: "type",
        class: ContentClassesType.text,
        data: { text: "Ремонт" },
      },
      {
        name: "address",
        class: ContentClassesType.text,
        data: { text: "Санкт-Петербург, Невский пр. 123" },
      },
      {
        name: "assigned",
        class: ContentClassesType.assigned,
        data: { text: "18.04.2021 14:00" },
      },
      {
        name: "deadline",
        class: ContentClassesType.deadline,
        data: { text: "Завтра 12:30" },
      },
      {
        name: "note",
        class: ContentClassesType.note,
        data: { text: "Помыть окна" },
      },
    ],
  ],
};
