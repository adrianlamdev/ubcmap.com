/* eslint-disable */
import type { Prisma } from "@prisma/client";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateSubject(options?: MutationOptions<Prisma.SubjectGetPayload<Prisma.SubjectCreateArgs> | undefined, unknown, Prisma.SubjectCreateArgs>) {
    const mutation = request.useModelMutation('Subject', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectCreateArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SubjectGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManySubject(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SubjectCreateManyArgs>) {
    const mutation = request.useModelMutation('Subject', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManySubject<T extends Prisma.SubjectFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.SubjectFindManyArgs>, options?: QueryOptions<Array<Prisma.SubjectGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Subject', 'findMany', args, options);
}

export function useInfiniteFindManySubject<T extends Prisma.SubjectFindManyArgs, R extends Array<Prisma.SubjectGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.SubjectFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.SubjectGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Subject', 'findMany', getNextArgs, options);
}

export function useFindUniqueSubject<T extends Prisma.SubjectFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.SubjectFindUniqueArgs>, options?: QueryOptions<Prisma.SubjectGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Subject', 'findUnique', args, options);
}

export function useFindFirstSubject<T extends Prisma.SubjectFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.SubjectFindFirstArgs>, options?: QueryOptions<Prisma.SubjectGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Subject', 'findFirst', args, options);
}

export function useUpdateSubject(options?: MutationOptions<Prisma.SubjectGetPayload<Prisma.SubjectUpdateArgs> | undefined, unknown, Prisma.SubjectUpdateArgs>) {
    const mutation = request.useModelMutation('Subject', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SubjectGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManySubject(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SubjectUpdateManyArgs>) {
    const mutation = request.useModelMutation('Subject', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertSubject(options?: MutationOptions<Prisma.SubjectGetPayload<Prisma.SubjectUpsertArgs> | undefined, unknown, Prisma.SubjectUpsertArgs>) {
    const mutation = request.useModelMutation('Subject', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SubjectGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteSubject(options?: MutationOptions<Prisma.SubjectGetPayload<Prisma.SubjectDeleteArgs> | undefined, unknown, Prisma.SubjectDeleteArgs>) {
    const mutation = request.useModelMutation('Subject', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SubjectGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManySubject(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SubjectDeleteManyArgs>) {
    const mutation = request.useModelMutation('Subject', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SubjectDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.SubjectDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateSubject<T extends Prisma.SubjectAggregateArgs>(args?: Prisma.Subset<T, Prisma.SubjectAggregateArgs>, options?: QueryOptions<Prisma.GetSubjectAggregateType<T>>) {
    return request.useModelQuery('Subject', 'aggregate', args, options);
}

export function useGroupBySubject<T extends Prisma.SubjectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SubjectGroupByArgs['orderBy'] } : { orderBy?: Prisma.SubjectGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.SubjectGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.SubjectGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.SubjectGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.SubjectGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.SubjectGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Subject', 'groupBy', args, options);
}

export function useCountSubject<T extends Prisma.SubjectCountArgs>(args?: Prisma.Subset<T, Prisma.SubjectCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SubjectCountAggregateOutputType> : number>) {
    return request.useModelQuery('Subject', 'count', args, options);
}

export function useCheckSubject(args: { operation: PolicyCrudKind; where?: { id?: string; name?: string }; }, options?: QueryOptions<boolean>) {
    return request.useModelQuery('Subject', 'check', args, options);
}
