import type { EnvironmentOption } from '~/components/util/flags/interface/environment/EnvironmentOption';
import type { AvailableConfig } from '~/data/config';
import type { GenerateOperatingSystem } from '~/components/util/flags/interface/generate/GenerateOperatingSystem';

interface File {
    'name'?: string,
    'mime': string,
    'extension': string
}

export interface OperatingSystemOption extends EnvironmentOption {
    'file': File | false,
    'generate': GenerateOperatingSystem<AvailableConfig | 'existingFlags'>
}
