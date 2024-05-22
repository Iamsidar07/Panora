import config from '@/lib/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner"
import Cookies from 'js-cookie';

interface IProDto {
    name: string;
    id_user: string; 
}

const useCreateProject = () => {
    const queryClient = useQueryClient();
    
    const add = async (data: IProDto) => {
        const response = await fetch(`${config.API_URL}/projects`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('access_token')}`,
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to add project');
        }
        
        return response.json();
    };
    return useMutation({
        mutationFn: add,
        onMutate: () => {
            /*toast("Project is being created !", {
                description: "",
                action: {
                  label: "Close",
                  onClick: () => console.log("Close"),
                },
            })*/
        },
        onError: (error) => {
            /*toast("Project creation has failed !", {
                description: error as any,
                action: {
                  label: "Close",
                  onClick: () => console.log("Close"),
                },
            })*/
        },
        onSuccess: (data) => {
                queryClient.setQueryData<IProDto[]>(['projects'], (oldQueryData = []) => {
                return [...oldQueryData, data];
            });
            toast("Project created !", {
                description: "",
                action: {
                    label: "Close",
                    onClick: () => console.log("Close"),
                },
            })
        },
        onSettled: () => {
        },
    });
};

export default useCreateProject;
