import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const ReportDocument = ({ reportData }) => {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "column",
    },
    title: {
      width: "100%",
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    section: {
      width: "100%",
      marginBottom: 5,
      paddingHorizontal: 10,
    },
    text: {
      textAlign: "start",
    },
  });

  return (
    <Document>
      <Page wrap size="A4" orientation="portrait" style={styles.page}>
        <View wrap style={styles.title}>
          <Text
            break
            style={
              ([styles.text],
              { fontWeight: "semibold", textDecoration: "underline" })
            }
          >
            Report type: Cash Flow Statement (CFS)
          </Text>
        </View>
        <br />
        <br />
        <View wrap style={styles.section}>
          <Text break style={styles.text}>
            The following is a summary report.
          </Text>
        </View>
        <br />
        <br />
        <View wrap style={styles.section}>
          <Text break style={styles.text}>
            NOTE: Digits with the prefix (-) indicate outflows, whereas digits
            without the prefix (+) indicate inflows.
          </Text>
        </View>
        <hr className="my-2" />
        <br />
        <hr className="my-2" />
        <View wrap style={styles.section}>
          {reportData.map((statement, index) => {
            const records = (
              <Text break key={statement.id} style={styles.text}>
                <hr className="my-2" />
                {index + 1} . {statement.item.name} | Total cost:{" "}
                {statement.item.is_income
                  ? `+${statement.amount}`
                  : `-${statement.amount}`}
                <hr className="my-2" />
              </Text>
            );

            return records;
          })}
        </View>
        <hr className="my-2" />
      </Page>
    </Document>
  );
};

export default ReportDocument;
