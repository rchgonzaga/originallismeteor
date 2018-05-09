import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
  Divider,
  Container,
  List,
  Grid,
  Dropdown,
  Form,
  Label,
  Tab,
  Breadcrumb,
  Accordion
} from "semantic-ui-react";
import ReactDataGrid from "react-data-grid";
import { Editors, Toolbar, Formatters } from "react-data-grid-addons";
import update from "immutability-helper";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "./redux/actions";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleClick = this.handleClick.bind(this);

    faker.locale = "en_GB";

    const counties = [
      { id: 0, title: "Bedfordshire" },
      { id: 1, title: "Berkshire" },
      { id: 2, title: "Buckinghamshire" },
      { id: 3, title: "Cambridgeshire" },
      { id: 4, title: "Cheshire" },
      { id: 5, title: "Cornwall" },
      { id: 6, title: "Cumbria, (Cumberland)" },
      { id: 7, title: "Derbyshire" },
      { id: 8, title: "Devon" },
      { id: 9, title: "Dorset" },
      { id: 10, title: "Durham" },
      { id: 11, title: "Essex" },
      { id: 12, title: "Gloucestershire" },
      { id: 13, title: "Hampshire" },
      { id: 14, title: "Hertfordshire" },
      { id: 15, title: "Huntingdonshire" },
      { id: 16, title: "Kent" },
      { id: 17, title: "Lancashire" },
      { id: 18, title: "Leicestershire" },
      { id: 19, title: "Lincolnshire" },
      { id: 20, title: "Middlesex" },
      { id: 21, title: "Norfolk" },
      { id: 22, title: "Northamptonshire" },
      { id: 23, title: "Northumberland" },
      { id: 24, title: "Nottinghamshire" },
      { id: 25, title: "Northamptonshire" },
      { id: 26, title: "Oxfordshire" },
      { id: 27, title: "Northamptonshire" },
      { id: 28, title: "Rutland" },
      { id: 29, title: "Shropshire" },
      { id: 30, title: "Somerset" },
      { id: 31, title: "Staffordshire" },
      { id: 32, title: "Suffolk" },
      { id: 33, title: "Surrey" },
      { id: 34, title: "Sussex" },
      { id: 35, title: "Warwickshire" },
      { id: 36, title: "Westmoreland" },
      { id: 37, title: "Wiltshire" },
      { id: 38, title: "Worcestershire" },
      { id: 39, title: "Yorkshire" }
    ];

    const titles = ["Dr.", "Mr.", "Mrs.", "Miss", "Ms."];

    const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
    const { ImageFormatter } = Formatters;

    this._columns = [
      { key: "id", name: "ID", width: 80, resizable: true },
      {
        key: "avartar",
        name: "Avartar",
        width: 60,
        formatter: ImageFormatter,
        resizable: true,
        headerRenderer: <ImageFormatter value={faker.image.cats()} />
      },
      {
        key: "county",
        name: "County",
        editor: <AutoCompleteEditor options={counties} />,
        width: 200,
        resizable: true
      },
      {
        key: "title",
        name: "Title",
        editor: <DropDownEditor options={titles} />,
        width: 200,
        resizable: true,
        events: {
          onDoubleClick: function() {
            console.log("The user double clicked on title column");
          }
        }
      },
      {
        key: "firstName",
        name: "First Name",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "lastName",
        name: "Last Name",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "email",
        name: "Email",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "street",
        name: "Street",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "zipCode",
        name: "ZipCode",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "date",
        name: "Date",
        editable: true,
        width: 200,
        resizable: true
      },
      { key: "bs", name: "bs", editable: true, width: 200, resizable: true },
      {
        key: "catchPhrase",
        name: "Catch Phrase",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "companyName",
        name: "Company Name",
        editable: true,
        width: 200,
        resizable: true
      },
      {
        key: "sentence",
        name: "Sentence",
        editable: true,
        width: 200,
        resizable: true
      }
    ];

    this.state = { rows: this.createRows(20) };
  }

  handleClick(e, titleProps) {
    const { index } = titleProps;
    this.setState({ activeIndex: index });
  }

  createRows = numberOfRows => {
    let rows = [];
    for (let i = 0; i < numberOfRows; i++) {
      rows[i] = this.createFakeRowObjectData(i);
    }
    return rows;
  };

  createFakeRowObjectData = index => {
    return {
      id: "id_" + index,
      avartar: faker.image.avatar(),
      county: faker.address.county(),
      email: faker.internet.email(),
      title: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      date: faker.date.past().toLocaleDateString(),
      bs: faker.company.bs(),
      catchPhrase: faker.company.catchPhrase(),
      companyName: faker.company.companyName(),
      words: faker.lorem.words(),
      sentence: faker.lorem.sentence()
    };
  };

  getColumns = () => {
    let clonedColumns = this._columns.slice();
    clonedColumns[2].events = {
      onClick: (ev, args) => {
        const idx = args.idx;
        const rowIdx = args.rowIdx;
        this.grid.openCellEditor(rowIdx, idx);
      }
    };

    return clonedColumns;
  };

  handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    let rows = this.state.rows.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, { $merge: updated });
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  };

  handleAddRow = ({ newRowIndex }) => {
    const newRow = {
      value: newRowIndex,
      userStory: "",
      developer: "",
      epic: ""
    };

    let rows = this.state.rows.slice();
    rows = update(rows, { $push: [newRow] });
    this.setState({ rows });
  };

  getRowAt = index => {
    if (index < 0 || index > this.getSize()) {
      return undefined;
    }

    return this.state.rows[index];
  };

  getSize = () => {
    return this.state.rows.length;
  };

  render() {
    const columns = [
      { key: "id", name: "ID", width: 500 },
      { key: "title", name: "Title", width: 500 }
    ];
    const rows = [
      { id: 1, title: "Title 1" },
      { id: 2, title: "Title 2" },
      { id: 3, title: "Title 3" }
    ];
    const rowGetter = rowNumber => rows[rowNumber];

    const { activeIndex } = this.state;
    const panes = [
      {
        menuItem: (
          <Menu.Item key="listas" style={{ border: "none" }}>
            <Icon name="list layout" /> Listas<Label>15</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane style={{ border: "none" }}>
            <Grid>
              <Grid.Column width={4}>
                <Accordion styled>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    What is a dog?
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    What kinds of dogs are there?
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <p>
                      There are many breeds of dogs. Each breed varies in size
                      and temperament. Owners often select a breed of dog that
                      they find to be compatible with their own lifestyle and
                      desires from a companion.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    How do you acquire a dog?
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Three common ways for a prospective owner to acquire a dog
                      is from pet shops, private owners, or shelters.
                    </p>
                    <p>
                      A pet shop may be the most convenient way to buy a dog.
                      Buying a dog from a private owner allows you to assess the
                      pedigree and upbringing of your dog before choosing to
                      take it home. Lastly, finding your dog from a shelter,
                      helps give a good home to a dog who may not find one so
                      readily.
                    </p>
                  </Accordion.Content>
                </Accordion>
              </Grid.Column>
              <Grid.Column width={11}>
                <Container fluid>
                  <ReactDataGrid
                    columns={columns}
                    rowGetter={rowGetter}
                    rowsCount={rows.length}
                    totalWidth="100%"
                    minHeight={500}
                  />
                </Container>
              </Grid.Column>
            </Grid>
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="Quadros" style={{ border: "none" }}>
            <Icon name="block layout" /> layoutQuadros<Label>15</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane style={{ border: "none" }}>
            <ReactDataGrid
              ref={node => (this.grid = node)}
              enableCellSelect={true}
              columns={this.getColumns()}
              rowGetter={this.getRowAt}
              rowsCount={this.getSize()}
              onGridRowsUpdated={this.handleGridRowsUpdated}
              toolbar={<Toolbar onAddRow={this.handleAddRow} />}
              enableRowSelect={true}
              rowHeight={50}
              minHeight={600}
              rowScrollTimeout={200}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="burncharts" style={{ border: "none" }}>
            <Icon name="area chart" /> BurnCharts<Label>15</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane style={{ border: "none" }}>Tab 3 Content</Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="cumulativeflowdiagram" style={{ border: "none" }}>
            <Icon name="line chart" /> Cumulative Flow<Label>15</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane style={{ border: "none" }}>Tab 3 Content</Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="vazaomedia" style={{ border: "none" }}>
            <Icon name="theme" /> Vazão média
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane style={{ border: "none" }}>Tab 3 Content</Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="relatorios" style={{ border: "none" }}>
            <Icon name="filter" /> Relatórios
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane style={{ border: "none" }}>Tab 3 Content</Tab.Pane>
        )
      }
    ];

    return (
      <div>
        <Breadcrumb size="small">
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section link>Projetos</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section active>Principal</Breadcrumb.Section>
        </Breadcrumb>
        <div style={{ margin: "auto -8px auto -8px" }}>
          <Container
            fluid
            style={{
              backgroundColor: "#f6f6f6",
              paddingTop: "15px",
              paddingBottom: "15px"
            }}
          >
            <Tab panes={panes} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Projects;
