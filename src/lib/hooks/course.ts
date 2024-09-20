/* eslint-disable */
import type { Prisma } from "@prisma/client";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateCourse(options?: MutationOptions<Prisma.CourseGetPayload<Prisma.CourseCreateArgs> | undefined, unknown, Prisma.CourseCreateArgs>) {
    const mutation = request.useModelMutation('Course', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseCreateArgs>(args: Prisma.SelectSubset<T, Prisma.CourseCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CourseGetPayload<T> | undefined>;
        }
    };
}

export function useCreateManyCourse(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CourseCreateManyArgs>) {
    const mutation = request.useModelMutation('Course', 'POST', 'createMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.CourseCreateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useFindManyCourse<T extends Prisma.CourseFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.CourseFindManyArgs>, options?: QueryOptions<Array<Prisma.CourseGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Course', 'findMany', args, options);
}

export function useInfiniteFindManyCourse<T extends Prisma.CourseFindManyArgs, R extends Array<Prisma.CourseGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.CourseFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.CourseGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Course', 'findMany', getNextArgs, options);
}

export function useFindUniqueCourse<T extends Prisma.CourseFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.CourseFindUniqueArgs>, options?: QueryOptions<Prisma.CourseGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Course', 'findUnique', args, options);
}

export function useFindFirstCourse<T extends Prisma.CourseFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.CourseFindFirstArgs>, options?: QueryOptions<Prisma.CourseGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Course', 'findFirst', args, options);
}

export function useUpdateCourse(options?: MutationOptions<Prisma.CourseGetPayload<Prisma.CourseUpdateArgs> | undefined, unknown, Prisma.CourseUpdateArgs>) {
    const mutation = request.useModelMutation('Course', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.CourseUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CourseGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManyCourse(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CourseUpdateManyArgs>) {
    const mutation = request.useModelMutation('Course', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.CourseUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertCourse(options?: MutationOptions<Prisma.CourseGetPayload<Prisma.CourseUpsertArgs> | undefined, unknown, Prisma.CourseUpsertArgs>) {
    const mutation = request.useModelMutation('Course', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.CourseUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CourseGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteCourse(options?: MutationOptions<Prisma.CourseGetPayload<Prisma.CourseDeleteArgs> | undefined, unknown, Prisma.CourseDeleteArgs>) {
    const mutation = request.useModelMutation('Course', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.CourseDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.CourseGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManyCourse(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.CourseDeleteManyArgs>) {
    const mutation = request.useModelMutation('Course', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.CourseDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.CourseDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateCourse<T extends Prisma.CourseAggregateArgs>(args?: Prisma.Subset<T, Prisma.CourseAggregateArgs>, options?: QueryOptions<Prisma.GetCourseAggregateType<T>>) {
    return request.useModelQuery('Course', 'aggregate', args, options);
}

export function useGroupByCourse<T extends Prisma.CourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CourseGroupByArgs['orderBy'] } : { orderBy?: Prisma.CourseGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.CourseGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.CourseGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.CourseGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.CourseGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.CourseGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Course', 'groupBy', args, options);
}

export function useCountCourse<T extends Prisma.CourseCountArgs>(args?: Prisma.Subset<T, Prisma.CourseCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.CourseCountAggregateOutputType> : number>) {
    return request.useModelQuery('Course', 'count', args, options);
}

export function useCheckCourse(args: { operation: PolicyCrudKind; where?: { id?: string; title?: string; description?: string; subject_id?: string; prerequisite_text?: string; credits?: number }; }, options?: QueryOptions<boolean>) {
    return request.useModelQuery('Course', 'check', args, options);
}
