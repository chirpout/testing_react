import DefaultLayout from '../components/DefaultLayout';

export default function Browse() {
    return (
        <DefaultLayout>
            <BrowseView>
            </BrowseView>
        </DefaultLayout>
    );
}

const BrowseView = () => {
    return (
        <div>
            <p>Coming soon...</p>
        </div>
    );
}
