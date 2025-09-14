import { ScrollView, Text } from 'react-native';

import { PrivacyPolicyBox } from '~/components/PrivacyPolicy/PrivacyPolicyBox';
import { PrivacyPolicyCollectionPart1 } from '~/components/PrivacyPolicy/PrivacyPolicyCollectionPart1';
import PrivacyPolicyCollectionPart2 from '~/components/PrivacyPolicy/PrivacyPolicyCollectionPart2';
import { PrivacyPolicyDefinitions } from '~/components/PrivacyPolicy/PrivacyPolicyDefinitions';
import { PrivacyPolicyImportantInfo } from '~/components/PrivacyPolicy/PrivacyPolicyImportantInfo';
import PrivacyPolicyIntroduction from '~/components/PrivacyPolicy/PrivacyPolicyIntroduction';
import { PrivacyPolicyProtection } from '~/components/PrivacyPolicy/PrivacyPolicyProtection';
import { PrivacyPolicySharing } from '~/components/PrivacyPolicy/PrivacyPolicySharing';

export default function PrivacyPolicy() {
    return (
        <ScrollView>
            <PrivacyPolicyBox />
            <PrivacyPolicyIntroduction />
            <PrivacyPolicyDefinitions />
            <PrivacyPolicyCollectionPart1 />
            <PrivacyPolicyCollectionPart2 />
            <PrivacyPolicySharing />
            <PrivacyPolicyProtection />
            <PrivacyPolicyImportantInfo />
        </ScrollView>
    );
}