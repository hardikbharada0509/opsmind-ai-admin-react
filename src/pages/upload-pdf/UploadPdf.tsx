import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const UploadPdf = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">Upload PDF</h1>
            </div>
            <div className="flex justify-end gap-2">
                <Input type="text" className="w-60" placeholder="Search text" />
                <Button>Upload PDF</Button>
            </div>
        </div>
    );
};

export default UploadPdf;