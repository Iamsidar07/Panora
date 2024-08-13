import { DesunifyReturnType } from '@@core/utils/types/desunify.input';
import { UnifiedHrisGroupInput, UnifiedHrisGroupOutput } from './model.unified';
import { OriginalGroupOutput } from '@@core/utils/types/original/original.hris';
import { ApiResponse } from '@@core/utils/types';
import { SyncParam } from '@@core/utils/types/interface';

export interface IGroupService {
  sync(data: SyncParam): Promise<ApiResponse<OriginalGroupOutput[]>>;
}

export interface IGroupMapper {
  desunify(
    source: UnifiedHrisGroupInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): DesunifyReturnType;

  unify(
    source: OriginalGroupOutput | OriginalGroupOutput[],
    connectionId: string,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<UnifiedHrisGroupOutput | UnifiedHrisGroupOutput[]>;
}
