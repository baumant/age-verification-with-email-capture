import { 
  Card,
  Layout,
  Page,
  Link
} from '@shopify/polaris';

class HelpPage extends React.Component {
  state = {
    
  };

  render() {

    
    return (
      <Page>
        <Layout>
          
          <Layout.AnnotatedSection
            title="Help"
            description="If you need help or have questions, please submit an issue on Github here:"
          >
            <Card sectioned>
              <Link url="https://help.shopify.com/manual" external>
                Shopify Help Center
              </Link>
            </Card>
          </Layout.AnnotatedSection>

        </Layout>
      </Page>
    )
  }
}

export default HelpPage;